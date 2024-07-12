
export async function useFetch(URL, arr){
    const response = await fetch(URL)
    const data = await response.json();

    arr(data)
}