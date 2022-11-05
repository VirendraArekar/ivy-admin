
import Skeleton from "../../layouts/Skeleton";
import Card from "../../components/Card";
import ChartComponent from "../../components/ChartComponent";
import TopComponent from "../../components/TopComponent";

  
export default function Leads_Enquiry(props) {
    const leadEnquiries = [
        { Title: "Assigned Enquiry", Count: 189, Progress: 75 },
        { Title: "Visa Approvals", Count: 154, Progress: 100 },
        { Title: "Country wise Visa Approval", Count: 78, Progress: 50 },
       
    ]
   
    return (
        <Skeleton>
            <div className="p-10">
                <TopComponent title={'Dashboard'} current='Dashboard'/>
                <h1 style={{ fontWeight: 600, padding: "25px 0" }}>Leads & Enquiries</h1>
                <div className="flex justify-center">
                    {leadEnquiries.map((d, i) =>
                        <Card
                            key={i}
                            title={d.Title}
                            Count={d.Count}
                            Progress={d.Progress}
                        />
                    )}
                </div>
                
                <ChartComponent
                    title="Visa Approval - Country Wise"
                    options={['Last 6 Months', 'Last 3 Months', 'Last 9 Months', 'Last Weak', 'This Year', 'This Month', 'Today']}
                    bar='double'
                    dataset1={[234, 150, 81, 38, 251, 194, 50, 26, 150, 180]}
                    labels={["ALL","AUS","NZ","UK","USA","CA","FR","IRE","DEU","SIN",]}
                />
                <ChartComponent

                    title="Enquiry Generated - Counsellor Wise"
                    options={['Last 6 Months', 'Last 3 Months', 'Last 9 Months', 'Last Weak', 'This Year', 'This Month', 'Today']}
                    bar='double'
                    dataset1={[234, 150, 81, 38, 251, 194, 50, 26, 150, 180,182,68]}
                    labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"]}
                />
                <ChartComponent
                    title="Enquiry Generated - Source Wise"
                    options={['Last 6 Months', 'Last 3 Months', 'Last 9 Months', 'Last Weak', 'This Year', 'This Month', 'Today']}
                    bar='double'
                    dataset1={[234, 150, 81, 38, 251, 194, 50, 26, 150, 180]}
                    labels={["GOOGLE", "FACEBOOK", "INSTAGRAM", "LINKEDIN", "SIKSHA","SULEKHA", "NEWSPAPER", "SMS", "TELECALLING", "WALK-IN"]}
                />
            </div>
        </Skeleton>
    )
}