import React, { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Alert, Card, Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { verifyUser } from "../../helpers/axiosHelper";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const VerifyEmail = () => {
  const [isPending, setIsPending] = useState(true);
  const [queryParams] = useSearchParams();
  const [response, setResponse] = useState({});
  useEffect(() => {
    const obj = {
      email: queryParams.get("e"),
      emailValidationCode: queryParams.get("c"),
    };
    (async () => {
      const result = await verifyUser(obj);
      setResponse(result);
      setIsPending(false);
    })();
  }, []);

  return (
    <div>
      <Header></Header>
      <Container className="page-main">
        <Card className="verify_email-card centering">
          {isPending && (
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          )}
          <Alert variant={response.status==="success"?"success":"danger"}>{response.message}</Alert>
        </Card>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default VerifyEmail;
