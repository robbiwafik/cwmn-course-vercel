"use client";

export default function Home() {
  const handleSort = async () => {
    const _ = (await import("lodash")).default;

    const users = [
      {name: "c"},
      {name: "b"},
      {name: "a"}
    ];
    const sortedUsers = _.orderBy(users, ["name"]);

    console.log(sortedUsers);
  }

  return (
    <main>
      <h1>Homepage</h1>
      <button onClick={handleSort}>Sort</button>
    </main>
  );
}
