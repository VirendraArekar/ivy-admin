import Skeleton from "../layouts/Skeleton";
import Card from "../components/Card";
import ChartComponent from "../components/ChartComponent";
import TopComponent from "../components/TopComponent";

export default function Dashboard(props) {
    const onlineLeads = [
        { Title: "Facebook", Icon: "facebook", Count: 189, Progress: 75 },
        { Title: "Instagram", Icon: "instagram", Count: 154, Progress: 100 },
        { Title: "Linkedin", Icon: "linkedin", Count: 78, Progress: 50 },
        { Title: "Google", Icon: "google", Count: 254, Progress: 80 },
    ]
    const offlineLeads = [
        { Title: "Walk-in", Icon: "facebook", Count: 189, Progress: 100 },
        { Title: "Referral", Icon: "instagram", Count: 154, Progress: 100 },
        { Title: "Direct", Icon: "linkedin", Count: 78, Progress: 100 },
        { Title: "Lorem Ipsum", Icon: "google", Count: 254, Progress: 100 },
    ]
    return (
        <Skeleton>
            <div className="p-10">
                <TopComponent title={'Dashboard'} component={"Dashboard"} current='Dashboard'/>
                <h1 style={{ fontWeight: 600, padding: "25px 0" }}>Online Leads</h1>
                <div className="flex">
                    {onlineLeads.map((d, i) =>
                        <Card
                            key={i}
                            title={d.Title}
                            Icon={d.Icon}
                            Count={d.Count}
                            Progress={d.Progress}
                        />
                    )}
                </div>
                <h1 style={{ fontWeight: 600, padding: "25px 0" }}>Offline Leads</h1>
                <div className="flex">
                    {offlineLeads.map((d, i) =>
                        <Card
                            key={i}
                            title={d.Title}
                            Icon={d.Icon}
                            Count={d.Count}
                            Progress={d.Progress}
                        />
                    )}
                </div>
                <ChartComponent
                    title="Leads Generated - Destination Wise"
                    options={['Last 6 Months', 'Last 3 Months', 'Last 9 Months', 'Last Weak', 'This Year', 'This Month', 'Today']}
                    bar='double'
                    dataset1={[234, 150, 81, 38, 251, 194, 50, 26, 150, 180]}
                    dataset2={[170, 170, 144, 100, 201, 148, 68, 17, 126, 98]}
                    labels={["BRANCH1","BRANCH2","BRANCH3","BRANCH4","BRANCH5","BRANCH6","BRANCH7","BRANCH8","BRANCH9","BRANCH10",]}
                />
                <ChartComponent
                    title="Leads Generated - Councellor Wise"
                    options={['John Doe', 'Naveen Din', 'John Doe', 'Martin Gill', 'Naveen Din', 'Martin Gill', 'Jessica Williams']}
                    bar='single'
                    dataset={ [234,150,81,38,251,194,50,26,92,234,150,180]}
                    labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"]}
                />
                <ChartComponent
                    title=" Leads Generated - Source Wise"
                    options={['Last 6 Months', 'Last 3 Months', 'Last 9 Months', 'Last Weak', 'This Year', 'This Month', 'Today']}
                    bar='single'
                    dataset={[234, 150, 81, 38, 251, 194, 50, 26, 150, 180]}
                    labels={["GOOGLE", "FACEBOOK", "INSTAGRAM", "LINKEDIN", "SIKSHA","SULEKHA", "NEWSPAPER", "SMS", "TELECALLING", "WALK-IN"]}
                />
            </div>
        </Skeleton>
    )
}