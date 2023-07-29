import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  // pages: {
  //   signIn: "https://pc-builder-six.vercel.app/login",
  // },
};

export default NextAuth(authOptions); // eslint-disable-


const data = {
  "price": 129999,
  "img": "https://th.bing.com/th/id/OIP.6nIzKK2YJMmxLptmJ6iy9AHaDt?pid=ImgDet&rs=1",
  "category": "CPU",
  "status": "In Stock",
  "description": "The ultimate processor for high-end gaming and intensive workloads.",
  "product_name": "Intel Core i9-11900K",
  "key_features": {
    //key_features will be relavant for item category, these feaures for CPU category.
    "Brand": "Intel",
    "Model": "Core i9-11900K",
    "Specification": "Octa-Core, 16 Threads",
    "Socket": "LGA1200",
    "Base Clock": "3.5 GHz",
    "Max Turbo Clock": "5.3 GHz",
    "Cores": 8,
    "Threads": 16,
    "TDP": "125W",
    "Integrated Graphics": "Intel UHD Graphics 750",
    "Cache": "16MB SmartCache"
  },
  "average_rating": 4.8,
  "reviews": [
    {
      "reviewer_name": "Alex Turner",
      "review_description": "The i9-11900K is a monster! Overclocked it easily and gained excellent performance.",
      "individual_rating": 4.9,
    },
    {
      "reviewer_name": "Sarah Adams",
      "review_description": "No complaints here. It handled my 3D rendering tasks like a champ.",
      "individual_rating": 4.2,
    }
  ]
}