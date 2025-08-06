function sum<T extends number> (a: T, b: T){
    return (a+b) as T;
}
console.log(sum(1,"1"));

type reviewType = {
			rating: number,
			comment: string,
			date: string,
			reviewerName: string,
			reviewerEmail: string,	
};
//sdsad/a
type metaType = {
    		createdAt: string,
		updatedAt: string,
		barcode: string,
		qrCode: string,
}

type dimensionType = {
    width: number,
    height: number,
    depth: number
}

type product = {
id: string | number,
	title: string,
	description: string,
    category: string,
	price: number,
	discountPercentage: number,
	rating: number,
	stock: number,
	tags: string[],
	brand: string,
	sku: string,
	weight: number,
	dimensions: dimensionType,
	warrantyInformation: string,
	shippingInformation: string,
	availabilityStatus: string,
	reviews: reviewType[],
	returnPolicy: string,
	minimumOrderQuantity: number,
	meta: metaType,
	images: string[],
	thumbnail: string,
};

const productA: product = {
	id: 1,
	title: "Essence Mascara Lash Princess",
	description:
		"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
	category: "beauty",
	price: 9.99,
	discountPercentage: 10.48,
	rating: 2.56,
	stock: 99,
	tags: ["beauty", "mascara"],
	brand: "Essence",
	sku: "BEA-ESS-ESS-001",
	weight: 4,
	dimensions: { width: 15.14, height: 13.08, depth: 22.99 },
	warrantyInformation: "1 week warranty",
	shippingInformation: "Ships in 3-5 business days",
	availabilityStatus: "In Stock",
	reviews: [
		{
			rating: 3,
			comment: "Would not recommend!",
			date: "2025-04-30T09:41:02.053Z",
			reviewerName: "Eleanor Collins",
			reviewerEmail: "eleanor.collins@x.dummyjson.com",
		},
		{
			rating: 4,
			comment: "Very satisfied!",
			date: "2025-04-30T09:41:02.053Z",
			reviewerName: "Lucas Gordon",
			reviewerEmail: "lucas.gordon@x.dummyjson.com",
		},
		{
			rating: 5,
			comment: "Highly impressed!",
			date: "2025-04-30T09:41:02.053Z",
			reviewerName: "Eleanor Collins",
			reviewerEmail: "eleanor.collins@x.dummyjson.com",
		},
	],
	returnPolicy: "No return policy",
	minimumOrderQuantity: 48,
	meta: {
		createdAt: "2025-04-30T09:41:02.053Z",
		updatedAt: "2025-04-30T09:41:02.053Z",
		barcode: "5784719087687",
		qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
	},
	images: ["https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"],
	thumbnail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
};

console.log(productA);

