import { ReactElement, useState } from "react";
import { Page } from "../../common/components/page/page";
import { RegisterProductForm } from "../components/forms/register-products-form";
import { ProductsTable } from "../components/tables/pruducts-table";

export const RegisterProductsScreen = (): ReactElement => {
  const [showForm, setShowForm] = useState(false);
  return (
    <Page>
      {showForm ? (
        <RegisterProductForm setShowForm={setShowForm} />
      ) : (
        <ProductsTable setShowForm={setShowForm} />
      )}
    </Page>
  );
};