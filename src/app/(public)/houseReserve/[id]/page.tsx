import React from "react";
import BaseDetail from "../../../../components/detailHouse/baseDetail/baseDetail"; 

interface Props {
  params: { id: string };
}

const HouseDetailPage = async ({ params }: Props) => {
  const res = await fetch(`/houses/${params.id}`, {
    cache: "no-store",
  });


  const house = await res.json();

  return (
    <div >
      <BaseDetail house={house} />
    </div>
  );
};

export default HouseDetailPage;
