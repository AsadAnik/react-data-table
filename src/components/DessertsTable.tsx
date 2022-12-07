import DataTable from 'react-data-table-component';
import useFetch from '../hooks/useFetch';

// Base URL...
const BASE_URL: string = "http://localhost:4000";

// Dessert Table..
const DessertsTable = () => {
    // Using our custom hook..
    const [desserts] = useFetch(`${BASE_URL}/desserts`);

    // Data Tables Columns..
    const columns = [
        {
            name: 'Desserts',
            selector: (row: any) => row.name,
            sortable: true,
        },
        {
            name: 'Calories',
            selector: (row: any) => row.calory,
            sortable: true,
        },
        {
            name: 'Fat',
            selector: (row: any) => row.fat,
            sortable: true,
        },
        {
            name: 'Carbs',
            selector: (row: any) => row.carbs,
            sortable: true,
        },
        {
            name: 'Protein',
            selector: (row: any) => row.protein,
            sortable: true,
        },
        // {
        //     name: 'Action',
        //     cell: (row: any) => (
        //         <button
        //             className="btn btn-primary"
        //             onClick={() => alert(row.id)}
        //         >
        //             Edit
        //         </button>
        //     )
        // }
    ];

    // Returning Statement..
    return (
        <div>
            <DataTable 
                title={"Nutrition"}
                columns={columns} 
                data={desserts}  
                pagination  
                fixedHeader
                // fixedHeaderScrollHeight='430px'
                selectableRows
                highlightOnHover
            />
        </div>
    );
};

export default DessertsTable;