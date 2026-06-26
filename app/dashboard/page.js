import Dashboard from "@/components/Dashboard"


const DashboardPage = () => {
  return (
<Dashboard/>
  )
}

export default DashboardPage

export async function generateMetadata() {
  return {
    title: `Dashboard - Get Me A Chai`,
    description: `Dashboard for Get Me A Chai`
  };
}
