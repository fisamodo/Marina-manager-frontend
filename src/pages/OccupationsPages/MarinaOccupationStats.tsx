import React from "react";
import { IMarina, IOccupancyStats } from "../../api-types";
import { DataTable } from "../components/DataTable";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface IMarinaOccupationStats {
  marina: IMarina;
  occupationStats: IOccupancyStats;
}

export const MarinaOccupationStats: React.FC<IMarinaOccupationStats> = ({
  marina,
  occupationStats,
}) => {
  const columns = [
    {
      title: "Boat type",
      dataIndex: "boatType",
      key: "boatType",
      width: 150,
    },
    {
      title: "Current occupation",
      dataIndex: "amount",
      key: "amount",
      width: 150,
    },
    {
      title: "Max amount allowed",
      dataIndex: "maxAmount",
      key: "maxAmount",
      width: 150,
    },
  ];
  const tableContainer = css`
    display: flex;
    justify-content: center;
  `;

  return (
    <div>
      <DataTable
        columns={columns}
        data={occupationStats}
        containerCss={tableContainer}
      />
    </div>
  );
};
