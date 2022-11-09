import Skeleton from "../../layouts/Skeleton"
import Card from "../../components/Card";
import Card_U from "../../components/Card_U";
import ChartComponent from "../../components/ChartComponent";
import Stackbar from "../../components/stackbarChart";
import TopComponent from "../../components/TopComponent";
export const options = {
    plugins: {
      title: {
        display: true,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  
  const labels = ['Branch1', 'Branch2', 'Branch3', 'Branch4', 'Branch5', 'Branch6', 'Branch7','Branch8','Branch9','Branch10'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Facebook',
        data: [234,150,81,38,251,194,50,26,92,234,150,180],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Instagram',
        data:[120, 170, 144, 100, 201, 148, 68, 17, 126, 98],
        backgroundColor: 'rgb(75, 192, 192)',
      },
      {
        label: 'Google',
        data:[274,150,,38,241,194,54,271,99,214,190,100],
        backgroundColor: 'rgb(53, 162, 235)',
      },
      {
        label: 'Website',
        data: [64,110,85,31,271,123,85,21,52,294,110,90],
        backgroundColor: 'rgb(53, 12, 235)',
      },
    ],
  };
export default function Dashboard(props) {
    const onlineLeads = [
        { Title: "Facebook", Icon: "facebook", Count: 189, Progress: 75 },
        { Title: "Instagram", Icon: "instagram", Count: 154, Progress: 100 },
        { Title: "Google", Icon: "google", Count: 254, Progress: 80 },
        { Title: "Website", Icon: "", Count: 78, Progress: 50 },
        
    ]
    const offlineLeads = [
        { Title: "Walk-in", Icon: "facebook", Count: 189, Progress: 100 },
        { Title: "Referral", Icon: "instagram", Count: 154, Progress: 100 },
        { Title: "Direct", Icon: "linkedin", Count: 78, Progress: 100 },
        { Title: " Hoarding", Icon: "google", Count: 254, Progress: 100 },
        { Title: "Fare's data", Icon: "google", Count: 254, Progress: 100 },
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
                        <Card_U
                            key={i}
                            title={d.Title}
                            Count={d.Count}
                            Progress={d.Progress}
                        />
                    )}
                </div>
                <Stackbar
                    title="Leads Generated - Branch Wise"
                    options_u={['Last 6 Months', 'Last 3 Months', 'Last 9 Months', 'Last Weak', 'This Year', 'This Month', 'Today']}
                   data={data}
                   options={options}
                />
                <ChartComponent
                    title="Leads Generated - Councellor Wise"
                    options={['John Doe', 'Naveen Din', 'John Doe', 'Martin Gill', 'Naveen Din', 'Martin Gill', 'Jessica Williams']}
                    bar='double'
                    dataset1={[170, 170, 144, 100, 201, 148, 68, 17, 126, 98,45,89]}
                    dataset2={ [234,150,81,38,251,194,50,26,92,234,150,180]}
                    labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"]}
                />    
                <ChartComponent
                    title="Leads Generated - Source Wise"
                    options={['Last 6 Months', 'Last 3 Months', 'Last 9 Months', 'Last Weak', 'This Year', 'This Month', 'Today']}
                    bar='single'
                    dataset={[234, 150, 81, 38, 251, 194, 50, 26, 150, 180]}
                    labels={["GOOGLE", "FACEBOOK", "INSTAGRAM", "LINKEDIN", "SIKSHA","SULEKHA", "NEWSPAPER", "SMS", "TELECALLING", "WALK-IN"]}
                />
            </div>
        </Skeleton>
    )
}