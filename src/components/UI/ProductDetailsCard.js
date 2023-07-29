/* eslint-disable @next/next/no-img-element */
import { Card, CardHeader, CardBody, Typography, Avatar } from "@material-tailwind/react";

export default function ProductDetailsCard({ product }) {
  if (!product) {
    // Handle the case where the product is null or undefined
    return <div>No product details available.</div>;
  }

  return (
    <div className="flex justify-center w-full p-[20px]">
      <div className="flex flex-col gap-2">
        <Card className="w-full max-w-[48rem] flex-col md:flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 md:w-2/5 shrink-0 md:rounded-r-none"
          >
            <img
              src={product.img}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="blue" className="mb-4 uppercase">
              {product.category}
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {product.product_name}
            </Typography>
            <Typography color="gray" className="mb-4 font-normal">
              {product.description}
            </Typography>
            <div>
              <Typography color="gray" className="font-normal flex items-center gap-2">
                <Typography variant="subtitle" color="blue" className="mb-1">
                  Rating:
                </Typography>{" "}
                {product.average_rating} {StarIcon()}
              </Typography>
              <Typography color="gray" className="font-normal flex items-center gap-2">
                <Typography variant="subtitle" color="blue" className="mb-1">
                  Price:
                </Typography>{" "}
                {product.price} ৳
              </Typography>
            </div>
            <div className="mb-4">
              <Typography color="gray" className="font-normal flex items-center gap-2">
                <Typography variant="subtitle" color="blue" className="mb-1">
                  Status:
                </Typography>{" "}
                {product.status}
              </Typography>
            </div>
          </CardBody>
        </Card>
        <div>
          <Card className="mb-4 p-[20px]">
            <Typography variant="subtitle1" color="blue" className="mb-1">
              Key Features:
            </Typography>
            {product.key_features ? (
              <ul className="list-disc pl-6">
                {Object.entries(product.key_features).map(([title, description], idx) => (
                  <li key={idx}>
                    <strong>{title}: </strong>
                    {description}
                  </li>
                ))}
              </ul>
            ) : (
              <Typography color="gray">No key features available.</Typography>
            )}
          </Card>
          <Card className="my-8 p-[20px]">
            <Typography variant="subtitle" color="blue" className="mb-1">
              Reviews:
            </Typography>
            {product.reviews?.length ? (
              product.reviews.map((review, idx) => (
                <Card
                  key={idx}
                  color="transparent"
                  shadow={false}
                  className="w-full max-w-[26rem] mb-4"
                >
                  <CardHeader
                    color="transparent"
                    floated={false}
                    shadow={false}
                    className="mx-0 flex items-center gap-4 pt-0 pb-8"
                  >
                    <Avatar
                      size="lg"
                      variant="circular"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      alt={review?.reviewer_name}
                    />
                    <div className="flex w-full flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray">
                          {review?.reviewer_name}
                        </Typography>
                        <div className="5 flex items-center gap-0">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <StarIcon key={index} />
                          ))}
                        </div>
                      </div>
                      <Typography color="blue-gray">
                        {review?.review_description}
                      </Typography>
                    </div>
                  </CardHeader>
                </Card>
              ))
            ) : (
              <Typography color="gray">No reviews available.</Typography>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}
