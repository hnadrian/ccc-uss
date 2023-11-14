type Params = {
    params: {
        slug: string;
    };
}

export default function Page({ params }: Params) {
    return (
        <div>
            <h1>{params.slug}</h1>
        </div>
    );
}