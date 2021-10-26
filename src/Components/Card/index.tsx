interface CardProps {
    name: string;
    age: number;
    hobby: string;
}

export const Card = ({name, age, hobby}: CardProps) => {

    return(
        <div>
            <h3>{name}</h3>
            <h4>{age} anos</h4>
            <h4>{hobby}</h4>
        </div>
    )
}