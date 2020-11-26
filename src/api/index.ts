export const getRadnomFromApi = async (min: number, max: number) => {
    const response = await fetch(`https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`);
    return response.json();
}