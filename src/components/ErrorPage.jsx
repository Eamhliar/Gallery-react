function ErrorPage() {
    return (
        <>
        <main 
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>An error occured!</h1>
            <p >This page not found</p>
        </main>
        </>
    );
}

export default ErrorPage;