import connectDB from "@database/db";


const getAllUsers = async () => {
  await connectDB();
}

export default function Page() {
  return <div>This is an example page using App Router!</div>;
}
