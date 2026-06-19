async function getCompanies() {
  const res = await fetch("http://localhost:3000/api/company", {
    cache: "no-store",
  });

  return res.json();
}

export default async function DashboardPage() {
  const data = await getCompanies();

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <h1 className="text-4xl font-bold mb-8">
        FleetFlow Dashboard
      </h1>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="text-left p-4">Company</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Phone</th>
              <th className="text-left p-4">GST</th>
            </tr>
          </thead>

          <tbody>
            {data.companies.map((company: any) => (
              <tr
                key={company.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">{company.name}</td>
                <td className="p-4">{company.email}</td>
                <td className="p-4">{company.phone}</td>
                <td className="p-4">
                  {company.gstNumber || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}