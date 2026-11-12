async function fetchData() {
    try {
        const response = await fetch('./data.json');

        if (!response.ok) {
            throw new Error(`خطا در دریافت داده: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('fetchData error:', error);
        return null;
    }
}
