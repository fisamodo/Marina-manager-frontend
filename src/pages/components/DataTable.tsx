import React from "react";
import Table from "rc-table";
import { css, SerializedStyles } from "@emotion/react";
import { themeColors } from "../../utils/color-schema";
/** @jsxImportSource @emotion/react */

interface ITable {
  data: any;
  columns: any;
  containerCss?: SerializedStyles;
  customTableStyle?: SerializedStyles;
}
export const DataTable: React.FC<ITable> = ({
  data,
  columns,
  containerCss,
  customTableStyle,
}) => {
  const tableStyle = css`
    table {
      border: 1px solid ${themeColors.primary};
    }
    td,
    tr,
    th {
      border: 1px solid ${themeColors.primaryGrey};
      padding: 1rem;
    }
    th {
      text-align: center;
    }
  `;

  const tableContainerStyle = css`
    overflow-y: auto;
  `;
  return (
    <div css={[tableContainerStyle, containerCss]}>
      <Table
        columns={columns}
        data={data}
        tableLayout="auto"
        css={[tableStyle, customTableStyle]}
      />
    </div>
  );
};
