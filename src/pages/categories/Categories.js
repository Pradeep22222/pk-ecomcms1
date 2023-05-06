import React from "react";
import { AdminLayout } from "../../components/admin-layout/AdminLayout";
import { AddCatForm } from "../../components/cat-form/CatForm";
import { CategoryTable } from "../../components/cat-table/CategoryTable";

const Categories = () => {
  return (
    <AdminLayout>
      <AddCatForm></AddCatForm>
      <hr></hr>
      <CategoryTable></CategoryTable>
    </AdminLayout>
  );
};

export default Categories;
