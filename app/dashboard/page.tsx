import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <h3 className="m-4 ">
          Hey {user.given_name} {user.family_name}! - {user.email}
        </h3>
        <LogoutLink className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          Log out
        </LogoutLink>
      </div>
    </div>
  );
}
