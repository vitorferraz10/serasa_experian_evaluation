
import { wrapperRender } from "test/render";
import { ButtonForm } from ".";
import { fireEvent } from "@testing-library/react";

describe('<ButtonForm />', () => {
   it('should render button with text content props', () => {
      const { getByText } = wrapperRender(<ButtonForm textContent="mock text to test" />)
      
      const button = getByText("mock text to test");

      expect(button).toBeInTheDocument()
   
   })

    it("should render button with property disabled", () => {
      const { getByText } = wrapperRender(
        <ButtonForm textContent="mock text to test" disabled/>
      );

      const button = getByText("mock text to test");
      expect(button).toBeDisabled();
    });
    it("should call function parameter when clicked button", () => {
      const handleClickMock = jest.fn()

      const { getByText } = wrapperRender(
        <ButtonForm textContent="mock text to test" handleClick={handleClickMock}/>
      );

      const button = getByText("mock text to test");
      
      fireEvent.click(button)

      expect(handleClickMock).toHaveBeenCalled();
    });

    it("should not call function parameter when clicked button with property disabled valut to be true", () => {
      const handleClickMock = jest.fn()

      const { getByText } = wrapperRender(
        <ButtonForm textContent="mock text to test" disabled handleClick={handleClickMock}/>
      );

      const button = getByText("mock text to test");
      
      fireEvent.click(button)

      expect(handleClickMock).not.toHaveBeenCalled();
    });

})