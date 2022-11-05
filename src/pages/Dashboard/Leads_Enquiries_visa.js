
import Skeleton from "../../layouts/Skeleton";
import Card from "../../components/Card";
import ChartComponent from "../../components/Chart_Component";
import TopComponent from "../../components/TopComponent";

  
export default function Leads_Enquiry_Visa(props) {
    const leadEnquiries = [
        { Title: "Enquiry", Count: 189, Progress: 75 },
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
                    title="Visa Launched -"
                    allOptions={['Branch Waise', 'Last 3 Months', 'Last 9 Months', 'Last Weak', 'This Year', 'This Month', 'Today']}
                    options={['Last 6 Months', 'Last 3 Months', 'Last 9 Months', 'Last Weak', 'This Year', 'This Month', 'Today']}
                    bar='double'
                    dataset1={[234, 150, 81, 38, 251, 194]}
                   Atitle="Branch Waise"
                    labels={['VIZAG', 'HYDERABAD (RO)', 'KPHB (HYD)', 'GUNTUR', 'VIJAYWADA', 'KAKINADA']}
                />

                <ChartComponent
                    title="Visa Launched -"
                    allOptions={['Destination Waise', 'Last 3 Months', 'Last 9 Months', 'Last Weak', 'This Year', 'This Month', 'Today']}
                    options={['Last 6 Months', 'Last 3 Months', 'Last 9 Months', 'Last Weak', 'This Year', 'This Month', 'Today']}
                    bar='double'
                    dataset1={[234, 150, 81, 38, 251, 194, 50, 26, 150, 180]}
                    Atitle="Destination Waise"
                    labels={["ALL","AUS","NZ","UK","USA","CA","FR","IRE","DEU","SIN",]}
                />
                <ChartComponent
                    title="Visa Rejected -"
                    allOptions={['Branch Waise', 'Last 3 Months', 'Last 9 Months', 'Last Weak', 'This Year', 'This Month', 'Today']}
                    options={['John Doe', 'Naveen Din', 'John Doe', 'Martin Gill', 'Naveen Din', 'Martin Gill', 'Jessica Williams']}
                    bar='single'
                    Atitle="Branch Waise"
                    dataset={ [234,150,81,38,251,194,50,26,92,234,150,180]}
                    labels={['VIZAG', 'HYDERABAD (RO)', 'KPHB (HYD)', 'GUNTUR', 'VIJAYWADA', 'KAKINADA']}
                />
               <ChartComponent
                    title="Visa Rejected -"
                    allOptions={['Destination Waise', 'Last 3 Months', 'Last 9 Months', 'Last Weak', 'This Year', 'This Month', 'Today']}
                    options={['John Doe', 'Naveen Din', 'John Doe', 'Martin Gill', 'Naveen Din', 'Martin Gill', 'Jessica Williams']}
                    bar='single'
                    Atitle="Destination Waise"
                    dataset={ [234,150,81,38,251,194,50,26,92,234,150,180]}
                    labels={["ALL","AUS","NZ","UK","USA","CA","FR","IRE","DEU","SIN"]}
                />

                <ChartComponent
                    title="Total Payments -"
                    allOptions={['Branch Waise', 'Last 3 Months', 'Last 9 Months', 'Last Weak', 'This Year', 'This Month', 'Today']}
                    options={['Last 6 Months', 'Last 3 Months', 'Last 9 Months', 'Last Weak', 'This Year', 'This Month', 'Today']}
                    bar='double'
                    Atitle="Branch Waise"
                    dataset1={[234, 150, 81, 38, 251, 194, 50, 26, 150, 180]}
                    dataset2={[170, 170, 144, 100, 201, 148, 68, 17, 126, 98]}
                    labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"]}
                />

<ChartComponent
                    title="Total Payments -"
                    allOptions={['Destination Waise', 'Last 3 Months', 'Last 9 Months', 'Last Weak', 'This Year', 'This Month', 'Today']}
                    options={['Last 6 Months', 'Last 3 Months', 'Last 9 Months', 'Last Weak', 'This Year', 'This Month', 'Today']}
                    bar='double'
                    Atitle="Destination Waise"
                    dataset1={[234, 150, 81, 38, 251, 194, 50, 26, 150, 180]}
                    dataset2={[170, 170, 144, 100, 201, 148, 68, 17, 126, 98]}
                    labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"]}
                />
            </div>
        </Skeleton>
    )
}