import { ReactElement } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import { formsTranslates } from "./translations/ptBr";
import { ClientFormEnum } from "./enums/client-form";

interface ClientsProps {
  setShowForm: (value: boolean) => void;
}

const translate = formsTranslates.clientForms;

export const RegisterClientForm = ({
  setShowForm,
}: ClientsProps): ReactElement => {
  const federalUnits = [
    { value: "SP", label: translate.federalUnits.SP },
    { value: "AC", label: translate.federalUnits.AC },
    { value: "AL", label: translate.federalUnits.AL },
    { value: "AP", label: translate.federalUnits.AP },
    { value: "AM", label: translate.federalUnits.AM },
    { value: "BA", label: translate.federalUnits.BA },
    { value: "CE", label: translate.federalUnits.CE },
    { value: "DF", label: translate.federalUnits.DF },
    { value: "ES", label: translate.federalUnits.ES },
    { value: "GO", label: translate.federalUnits.GO },
    { value: "MA", label: translate.federalUnits.MA },
    { value: "MT", label: translate.federalUnits.MT },
    { value: "MS", label: translate.federalUnits.MS },
    { value: "MG", label: translate.federalUnits.MG },
    { value: "PA", label: translate.federalUnits.PA },
    { value: "PB", label: translate.federalUnits.PB },
    { value: "PR", label: translate.federalUnits.PR },
    { value: "PE", label: translate.federalUnits.PE },
    { value: "PI", label: translate.federalUnits.PI },
    { value: "RJ", label: translate.federalUnits.RJ },
    { value: "RN", label: translate.federalUnits.RN },
    { value: "RS", label: translate.federalUnits.RS },
    { value: "RO", label: translate.federalUnits.RO },
    { value: "RR", label: translate.federalUnits.RR },
    { value: "SC", label: translate.federalUnits.SC },
    { value: "SE", label: translate.federalUnits.SE },
    { value: "TO", label: translate.federalUnits.TO },
    { value: "EX", label: translate.federalUnits.EX },
  ];

  return (
    <Container className="mt-5">
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label={translate.formLabels.document}
                className="mb-3"
              >
                <FormControl
                  type="text"
                  placeholder={translate.formPlaceholder.document}
                  id={ClientFormEnum.document}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                {translate.feedbackMessage.document}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label={translate.formLabels.name}
                className="mb-3"
              >
                <FormControl
                  type="text"
                  placeholder={translate.formPlaceholder.name}
                  id={ClientFormEnum.name}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                {translate.feedbackMessage.name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={10}>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label={translate.formLabels.address}
                className="mb-3"
              >
                <FormControl
                  type="text"
                  placeholder={translate.formPlaceholder.address}
                  id={ClientFormEnum.address}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                {translate.feedbackMessage.address}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label={translate.formLabels.number}
                className="mb-3"
              >
                <FormControl
                  type="text"
                  placeholder={translate.formPlaceholder.number}
                  id={ClientFormEnum.number}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                {translate.feedbackMessage.number}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label={translate.formLabels.neighborhood}
                className="mb-3"
              >
                <FormControl
                  type="text"
                  placeholder={translate.formPlaceholder.neighborhood}
                  id={ClientFormEnum.neighborhood}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                {translate.feedbackMessage.neighborhood}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={5}>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label={translate.formLabels.city}
                className="mb-3"
              >
                <FormControl
                  type="text"
                  placeholder={translate.formPlaceholder.city}
                  id={ClientFormEnum.city}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                {translate.feedbackMessage.city}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={3}>
            <FloatingLabel
              controlId="floatingInput"
              label={translate.formLabels.uf}
              className="mb-3"
            >
              <Form.Select aria-label={translate.formLabels.ufAriaLabel}>
                {federalUnits.map((uf) => (
                  <option key={uf.value} value={uf.value}>
                    {uf.label}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label={translate.formLabels.zipCode}
                className="mb-3"
              >
                <FormControl
                  type="text"
                  placeholder={translate.formLabels.zipCode}
                  id={ClientFormEnum.zipCode}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                {translate.feedbackMessage.zipCode}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="d-flex justify-content-end">
            <Button type="submit" variant={"primary"}>
              {translate.buttons.register}
            </Button>
          </Col>
          <Col md={6}>
            <Button
              type="button"
              variant={"secondary"}
              onClick={() => setShowForm(false)}
            >
              {translate.buttons.goBack}
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};