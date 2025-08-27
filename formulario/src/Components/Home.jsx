import { Formulario } from "./formulario"
import { Table } from "./Table"

export const Home = () => {
    return (
        <>
            <main className="box">
                <section className="box-item">
                    <Formulario />
                </section>
                <section className="table-section box-item">
                    <Table />
                </section>
            </main>
        </>
    )
}
