const Footer = () => {
    return (
        <>
            <footer>
                <p>Copyright Gameshop 2022</p>
            </footer>

            <style jsx>{`
                footer {
                    background-color: #333;
                    padding : 2em;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                p {
                    color : #fff;
                    font-family : 'Lato',sans-serif;
                }
            `}
            </style>
        </>
    );
}
 
export default Footer;