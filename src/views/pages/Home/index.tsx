import { Container, Heading } from "views/molecules";

function Home() {
    return (
        <div>
            
            <Heading title="Home" />
            
            <Container>
                
                <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Title</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Lindsay Walton</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Front-end Developer</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Member</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit<span className="sr-only">, Lindsay Walton</span></a>
                    </td>
                  </tr>
                
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Courtney Henry</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Designer</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">courtney.henry@example.com</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Admin</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit<span className="sr-only">, Courtney Henry</span></a>
                    </td>
                  </tr>
                
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Tom Cook</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Director, Product Development</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">tom.cook@example.com</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Member</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit<span className="sr-only">, Tom Cook</span></a>
                    </td>
                  </tr>
                
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Whitney Francis</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Copywriter</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">whitney.francis@example.com</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Admin</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit<span className="sr-only">, Whitney Francis</span></a>
                    </td>
                  </tr>
                
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Leonard Krasner</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Senior Designer</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">leonard.krasner@example.com</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Owner</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit<span className="sr-only">, Leonard Krasner</span></a>
                    </td>
                  </tr>
                
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Floyd Miles</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Principal Designer</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">floy.dmiles@example.com</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Member</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit<span className="sr-only">, Floyd Miles</span></a>
                    </td>
                  </tr>
                
              </tbody>
            </table>

            </Container>
        </div>
    )
}

export default Home;