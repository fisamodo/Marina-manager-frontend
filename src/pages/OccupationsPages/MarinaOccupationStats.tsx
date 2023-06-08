import React from "react";
import { IMarina, IOccupancyStats } from "../../api-types";
import { DataTable } from "../components/DataTable";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ContentContainer } from "../components/ContentContainer";
import { marinaOccupationStatsTableSchemaColumns } from "../../utils/table-schema";

interface IMarinaOccupationStats {
  marina: IMarina;
  occupationStats: IOccupancyStats;
}

export const MarinaOccupationStats: React.FC<IMarinaOccupationStats> = ({
  marina,
  occupationStats,
}) => {
  return (
    <ContentContainer>
      <DataTable
        columns={marinaOccupationStatsTableSchemaColumns}
        data={occupationStats}
      />
    </ContentContainer>
  );
};
