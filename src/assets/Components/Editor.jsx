import { useState } from 'react';
import Slider from './Slider';
import SideBarItems from './SideBarItems';
import { saveAs } from 'file-saver';

const OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: 'deg',
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: 'px',
  },
];

function Editor() {
  const [obj, setObj] = useState(OPTIONS);
  const [selectedOptionIdx, setselectedOptionIdx] = useState(0);
  const selectedFilter = obj[selectedOptionIdx];
  const [file, setFile] = useState(null);

  function handleSlider({ target }) {
    setObj((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIdx) return option;

        return { ...option, value: target.value };
      });
    });
  }


  function handleDownloadImage() {
    if (file) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const img = new Image();
      img.src = file;
      img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        context.filter = getImageStyle().filter;
        context.drawImage(img, 0, 0, img.width, img.height);
        canvas.toBlob(function(blob) {
          saveAs(blob, 'image.jpg');
        });
      };
    }
  }
  
  function getImageStyle() {
    const styleProperties = obj.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return {
      filter: styleProperties.join(' '),
    };
  }

  function handleUploadImage(e) {
    if (e.target.files[0]) {
      setFile(URL.createObjectURL(e.target.files[0]));
      setObj(OPTIONS); // Reset the filters
    }
  }
  

  return (
    <div className="container">
    <div className="main_img" id="main_img" style={getImageStyle()}>
  {file && <img src={file} alt="Uploaded" style={{width: '900px', height: '500px', marginLeft:'80px', borderRadius:'50px' }} />}
</div>



      <div className="sideBar">
        {obj.map((option, index) => {
          return (
            <SideBarItems
              key={index}
              name={option.name}
              active={index === selectedOptionIdx}
              handleClick={() => {
                setselectedOptionIdx(index);
              }}
            />
          );
        })}
      </div>

      <div className="buttonContainer">
        <input type="file" className='DB'  onChange={handleUploadImage} />
        <button className='DB' onClick={handleDownloadImage}>Download Image</button>
        <button className='DB' onClick={() => setFile(null)}>Remove Image</button>
      </div>

      <Slider min={selectedFilter.range.min} max={selectedFilter.range.max} value={selectedFilter.value} handleChange={handleSlider} />
    </div>
  );
}

export default Editor;
