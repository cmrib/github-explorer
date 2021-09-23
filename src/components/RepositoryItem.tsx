interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}


export function RepositoryItem(props: RepositoryItemProps) {

    return (
        <li>
            <strong>{props.repository.description}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url} target="_blank"> Acessar repositórios </a>
        </li>
    );
}