function makeHistoricPaths(categorySlug, propertySlug) 
{
	const categoryName = categorySlug.replace('-', ' ')
	const propertyName = propertySlug.replace('-', ' ')
	const paths = [
		{
			url: "/",
			name: "Home"
		},
		{
			url: `/ref/${categorySlug}`,
			name: categoryName
		},
		{
			url: "current",
			name: propertyName
		}
	];
	return paths
}

export {
    makeHistoricPaths
}