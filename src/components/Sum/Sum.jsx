// export const Sum = () => ();
export const Sum = ({a = 0, b = 0}) => {
    return (
        <p>Sum of {a} and {b} is {a + b}</p>
    )
}