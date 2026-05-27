// cwh method
// import React from 'react'

// const Username = ({params}) => {
//   return (
//     <div>
//       {params.username}
//     </div>
//   )
// }

// export default Username

// nextjs 16 method
export default async function Username({ params }) {
  const { username } = await params;

  return (
    <div>
      {username}
    </div>
  );
}