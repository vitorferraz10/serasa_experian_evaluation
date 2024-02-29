import { fireEvent } from "@testing-library/react";
import { TextField } from ".";
import { wrapperRender } from "test/render";

describe('<TextField />', () => {
   it('should input have correct placeholder', () => {
      const placeholderMock = "Write you task"
      const { getByPlaceholderText } = wrapperRender(
        <TextField placeholder={placeholderMock} />
      );
      const input = getByPlaceholderText(placeholderMock);

      expect(input).toBeInTheDocument()
   })
    it("should input have correct placeholder and correct value", () => {
      const placeholderMock = "mock text to test";
      const { getByPlaceholderText } = wrapperRender(
        <TextField placeholder={placeholderMock} />
      );
       const input = getByPlaceholderText(placeholderMock);
       
       fireEvent.change(input, {
         target: {
           value: "My name is John Doe",
         },
       });

      expect(input).toBeInTheDocument();
      expect(input).toHaveValue('My name is John Doe')
    });
})