import React, { Component } from 'react';
import axios from 'axios';

class ImageUpload extends Component {
  state = {
    displayError: null,
  };
  imageHandler = (event) => {
    const file = event.target.files[0];
    if (file.type.split('/')[0] !== 'image') {
      this.setState({ displayError: 'Provided file is not allowed' });
    } else {
      const formData = new FormData();
      formData.append('image', file);

      axios({
        method: 'post',
        url: '/api/image',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then((res) => {
          this.setState({ displayError: null });
          console.log('Client getting resposne: ');
          console.dir(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  render() {
    return (
      <React.Fragment>
        <input
          type="file"
          name="image"
          accept="image/*"
          multiple={false}
          onChange={this.imageHandler}
        />
        {this.state.displayError && <p>{this.state.displayError}</p>}
      </React.Fragment>
    );
  }
}

export default ImageUpload;
