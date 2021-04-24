
async function weatherCall() {

    try {

        /* getting the readbleStream data */
        const readbleStream = await fetch(`http://localhost:3000/employees/`);

        /* converting the readableStream data to json */
        const jsonData = await readbleStream.json();



        return jsonData;

    } catch (error) {
        alert(error)
    }



};
const employData = weatherCall().then(data => {
    console.log(data)
    console.log(data[0].name)
});



