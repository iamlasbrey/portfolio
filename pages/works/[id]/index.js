import { MongoClient, ObjectId } from 'mongodb'
import Work from '../../../components/Work'

const index = (props) => {
    return (
        <Work 
            description={props.workItem.description}
            presentation={props.workItem.presentation}
            title={props.workItem.title}
            year={props.workItem.year}
            stack={props.workItem.stack}
            images={props.workItem.images}
        />
    )
}


export async function getStaticPaths() {
    const client = await MongoClient.connect(
        process.env.URI
    );
    const db = client.db();
    const workCollection = db.collection("works");
    const work = await workCollection.find({}, { _id: 1 }).toArray();
    client.close();

    return {
        fallback: false,
        paths: work.map((mywork) => ({
        params: { id: mywork._id.toString() },
        })),
    };
    }


    export async function getStaticProps(context) {
        const id = context.params.id;
    
        const client = await MongoClient.connect(
            process.env.URI
        );
        const db = client.db();
        const workCollection = db.collection("works");
        const selectedWork = await workCollection.findOne({
            _id: ObjectId(id),
        });
        client.close();
    
        return {
            props: {
                workItem: {
                    id: selectedWork._id.toString(),
                    presentation: selectedWork.presentation,
                    title: selectedWork.name,
                    year: selectedWork.year,
                    stack: selectedWork.stack,
                    images: selectedWork.images,
                    description: selectedWork.description
            },
            },
        };
    }








export default index