import React from 'react'

function Edit() {
  return (
      <form>
      <tr>
    <td>
        <input 
        type="text"
        required="required"
        placeholder="Enter a product image link"
        name="img" />
    </td>
    <td>
        <input 
        type="text"
        required="required"
        placeholder="Enter a product name"
        name="name" />
    </td>
    <td>
        <input 
        type="text"
        required="required"
        placeholder="Enter a product price"
        name="price" />
    </td>
    <td>
    <input 
    type="text"
    required="required"
    placeholder="Enter the products department"
    name="department" />
    </td>
    <td>
        <input 
        type="text"
        required="required"
        placeholder="Enter a product description"
        name="description" />
    </td>
        </tr>
        </form>
  )
}

export default Edit