
export default function Header(props) {
    return (
        <header className="flex items-center justify-between p-4 bg-green-500 text-black-50">
            <h1 className="text-4xl">{props.title} {props.name}</h1>
            {props.children}
        </header>
    )
}
