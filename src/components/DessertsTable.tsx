import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import useFetch from '../hooks/useFetch';
import ToggleButton from './widgets/ToggleButton';

// Base URL...
const BASE_URL: string = "http://localhost:4000";

// Dessert Table..
const DessertsTable = () => {
    // Using our custom hook..
    const [desserts] = useFetch(`${BASE_URL}/desserts`);
    const [search, setSearch] = useState("");
    const [filteredDeserts, setFilteredDeserts] = useState([]);

    // Make Effect when changes Search keys..
    useEffect(() => {
        if (desserts.length > 0) {
            const results = desserts.filter(dessert => dessert?.name.toLowerCase().match(search.toLocaleLowerCase()));
            setFilteredDeserts(results);
        }
    }, [search]);

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
            <div style={{ padding: 10 }}>
                <button onClick={() => alert('Hi')}>
                    <ToggleButton label="Theme" />
                </button>
            </div>

            <DataTable
                title={"Nutrition"}
                columns={columns}
                data={search.length > 0 ? filteredDeserts : desserts}
                pagination
                fixedHeader
                // fixedHeaderScrollHeight='430px'
                selectableRows
                highlightOnHover
                subHeader
                subHeaderComponent={
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-25 form-control"
                        onChange={(event) => setSearch(event.target.value)}
                    />
                }
                dense
                theme="dark"
            />
        </div>
    );
};

export default DessertsTable;