import { useEffect, useState } from "react"
import Panel from "../../layout/Panel";
import Employee from "./Employee";
import style from './EmployeeList.module.css'

export default function EmployeeList() {
    const url = 'https://reqres.in/api/users'
    const limit = 5;
    const [employees, setEmployees] = useState([])
    const fetchEmployees = async () => {
        try {
            const response = await fetch(`${url}?per_page=${limit}`);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();

            const employeeData = data.data.map((employee) => {
                return {
                    id: employee.id,
                    email: employee.email,
                    first_name: employee.first_name,
                    last_name: employee.last_name,
                    avatar: employee.avatar,
                };
            });
            setEmployees(employeeData);
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchEmployees()
    }, [fetchEmployees])

    return (
        <Panel>
            <h2>Unser Team</h2>
            <div className={style['grid-container']}>
                {employees.map((employee) =>
                    <Employee key={`employee_${employee.id}`}
                        first_name={employee.first_name}
                        last_name={employee.last_name}
                        email={employee.email}
                        avatar={employee.avatar}
                    />
                )}
            </div>
        </Panel>
    )
}