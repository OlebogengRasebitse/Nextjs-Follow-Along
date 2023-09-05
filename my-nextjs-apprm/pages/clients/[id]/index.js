import { useRouter } from "next/router";

function ClientProjectPage() {
const router = useRouter();

function loadProjectHandler () {
    //load data
    router.push({
        pathname: '/clients/[id]/[clientprojectid]',
        query: { id: 'max', clientprojectid: 'projecta'}
    })
}

    return ( 
        <div>
            <h1>The project of a given client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
     );
}

export default ClientProjectPage;