
import Skeleton from "../../layouts/Skeleton";
import Card from "../../components/Card";
import ChartComponent from "../../components/ChartComponent";
import TopComponent from "../../components/TopComponent";

  
export default function Enquiry(props) {
    const onlineEnquiries = [
        { Title: "Assigned Enquiry", Icon: "facebook", Count: 189, Progress: 75 },
        { Title: "Visa Approvals", Icon: "instagram", Count: 154, Progress: 100 },
        { Title: "Country wise Visa Approval", Icon: "linkedin", Count: 78, Progress: 50 },
        { Title: "Google", Icon: "google", Count: 254, Progress: 80 },
    ]
    const offlineEnquiries = [
        { Title: "Walk-in", Icon: "facebook", Count: 189, Progress: 100 },
        { Title: "Referral", Icon: "instagram", Count: 154, Progress: 100 },
        { Title: "Direct", Icon: "linkedin", Count: 78, Progress: 100 },
        { Title: "hoarding and fare's data", Icon: "google", Count: 254, Progress: 100 },
    ]
    return (
        <Skeleton>
            <div className="p-10">
                <TopComponent title={'Dashboard'} current='Dashboard'/>
                <h1 style={{ fontWeight: 600, padding: "25px 0" }}>Online Enquiries</h1>
                <div className="flex">
                    {onlineEnquiries.map((d, i) =>
                        <Card
                            key={i}
                            title={d.Title}
                            Icon={d.Icon}
                            Count={d.Count}
                            Progress={d.Progress}
                        />
                    )}
                </div>
                <h1 style={{ fontWeight: 600, padding: "25px 0" }}>Offline Enquiries</h1>
                <div className="flex">
                    {offlineEnquiries.map((d, i) =>
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
                    title="Enquiry Generated - Destination Wise"
                    options={['Last 6 Months', 'Last 3 Months', 'Last 9 Months', 'Last Weak', 'This Year', 'This Month', 'Today']}
                    bar='double'
                    dataset1={[234, 150, 81, 38, 251, 194, 50, 26, 150, 180]}
                    dataset2={[170, 170, 144, 100, 201, 148, 68, 17, 126, 98]}
                    labels={["BRANCH1","BRANCH2","BRANCH3","BRANCH4","BRANCH5","BRANCH6","BRANCH7","BRANCH8","BRANCH9","BRANCH10",]}
                />
                <ChartComponent
                    title="Enquiry Generated - Counsellor Wise"
                    options={['John Doe', 'Naveen Din', 'John Doe', 'Martin Gill', 'Naveen Din', 'Martin Gill', 'Jessica Williams']}
                    bar='single'
                    dataset={ [234,150,81,38,251,194,50,26,92,234,150,180]}
                    labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"]}
                />
                <ChartComponent
                    title="Enquiry Generated - Source Wise"
                    options={['Last 6 Months', 'Last 3 Months', 'Last 9 Months', 'Last Weak', 'This Year', 'This Month', 'Today']}
                    bar='single'
                    dataset={[234, 150, 81, 38, 251, 194, 50, 26, 150, 180]}
                    labels={["GOOGLE", "FACEBOOK", "INSTAGRAM", "LINKEDIN", "SIKSHA","SULEKHA", "NEWSPAPER", "SMS", "TELECALLING", "WALK-IN"]}
                />
            </div>
        </Skeleton>
    )
}