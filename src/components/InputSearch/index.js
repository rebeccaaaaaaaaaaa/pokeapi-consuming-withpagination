import React from "react";
import {
  FormControl,
  Container,
  Input,
} from "@chakra-ui/react";

function InputSearch(props) {

  return (
    <div style={{marginTop: "100px"}}>
     <form onSubmit={props.handleSubmit}>
      <FormControl >
          <Input id="searchInput" type="text" placeholder="Buscar..." onChange={props.handleChange}/>
        </FormControl>
     </form>
    </div>
  );
}

export default InputSearch;
