import React from "react";
import useFetch from "./components/useFetch";

interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: string; // or Date if you prefer to handle dates
  updatedAt: string; // or Date if you prefer to handle dates
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[]; // Assuming images is an array of strings
  creationAt: string; // or Date if you prefer to handle dates
  updatedAt: string; // or Date if you prefer to handle dates
  category: Category;
}

const App = () => {
  const { data, loading, error } = useFetch<Product[]>(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="m-5">
      <ul>
        {data?.map((item) => (
          <>
            {" "}
            <li key={item.id}>{item.title}</li>
            <p className="font-semibold text-blue-500">
              {item.category.name}
            </p>{" "}
          </>
          // Add a key prop for list items
        ))}
      </ul>
    </div>
  );
};

export default App;
