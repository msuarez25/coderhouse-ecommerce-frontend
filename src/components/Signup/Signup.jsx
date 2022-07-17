import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../Context/Context';
import axios from 'axios';

const Signup = () => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const { logged, setLogged } = useContext(Context);

  const { errorMessage, setErrorMessage } = useState(true);

  const printListCoutries = async () => {
    try {
      const countries = await getCountries();
      if (countries.length > 0) {
        let list = '';
        countries.forEach((country) => {
          let suffixes = '';
          if (country.idd.suffixes && country.idd.suffixes.length === 1) {
            suffixes = country.idd.suffixes[0];
          }
          list += `<option value="${country.idd.root}${suffixes}">
            ${country.cioc || ''} 
            ${getFlagByName(country.name.common)}
            ${country.idd.root}${suffixes}</option>`;
        });
        document
          .querySelector('#country-code')
          .insertAdjacentHTML('beforeend', list);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCountries = async () => {
    const settings = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await fetch(
        'https://restcountries.com/v3.1/all',
        settings
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
    return false;
  };

  const getFlagByName = (name) => {
    const countryFalgs = {
      'Ascension Island': '&#127462&#127464',
      Andorra: '&#127462&#127465',
      'United Arab Emirates': '&#127462&#127466',
      Afghanistan: '&#127462&#127467',
      'Antigua & Barbuda': '&#127462&#127468',
      Anguilla: '&#127462&#127470',
      Albania: '&#127462&#127473',
      Armenia: '&#127462&#127474',
      Angola: '&#127462&#127476',
      Antarctica: '&#127462&#127478',
      Argentina: '&#127462&#127479',
      'American Samoa': '&#127462&#127480',
      Austria: '&#127462&#127481',
      Australia: '&#127462&#127482',
      Aruba: '&#127462&#127484',
      'Åland Islands': '&#127462&#127485',
      Azerbaijan: '&#127462&#127487',
      'Bosnia & Herzegovina': '&#127463&#127462',
      Barbados: '&#127463&#127463',
      Bangladesh: '&#127463&#127465',
      Belgium: '&#127463&#127466',
      'Burkina Faso': '&#127463&#127467',
      Bulgaria: '&#127463&#127468',
      Bahrain: '&#127463&#127469',
      Burundi: '&#127463&#127470',
      Benin: '&#127463&#127471',
      'St. Barthélemy': '&#127463&#127473',
      Bermuda: '&#127463&#127474',
      Brunei: '&#127463&#127475',
      Bolivia: '&#127463&#127476',
      'Caribbean Netherlands': '&#127463&#127478',
      Brazil: '&#127463&#127479',
      Bahamas: '&#127463&#127480',
      Bhutan: '&#127463&#127481',
      'Bouvet Island': '&#127463&#127483',
      Botswana: '&#127463&#127484',
      Belarus: '&#127463&#127486',
      Belize: '&#127463&#127487',
      Canada: '&#127464&#127462',
      'Cocos (Keeling) Islands': '&#127464&#127464',
      'Congo - Kinshasa': '&#127464&#127465',
      'Central African Republic': '&#127464&#127467',
      'Congo - Brazzaville': '&#127464&#127468',
      Switzerland: '&#127464&#127469',
      'Côte d’Ivoire': '&#127464&#127470',
      'Cook Islands': '&#127464&#127472',
      Chile: '&#127464&#127473',
      Cameroon: '&#127464&#127474',
      China: '&#127464&#127475',
      Colombia: '&#127464&#127476',
      'Clipperton Island': '&#127464&#127477',
      'Costa Rica': '&#127464&#127479',
      Cuba: '&#127464&#127482',
      'Cape Verde': '&#127464&#127483',
      Curaçao: '&#127464&#127484',
      'Christmas Island': '&#127464&#127485',
      Cyprus: '&#127464&#127486',
      Czechia: '&#127464&#127487',
      Germany: '&#127465&#127466',
      'Diego Garcia': '&#127465&#127468',
      Djibouti: '&#127465&#127471',
      Denmark: '&#127465&#127472',
      Dominica: '&#127465&#127474',
      'Dominican Republic': '&#127465&#127476',
      Algeria: '&#127465&#127487',
      'Ceuta & Melilla': '&#127466&#127462',
      Ecuador: '&#127466&#127464',
      Estonia: '&#127466&#127466',
      Egypt: '&#127466&#127468',
      'Western Sahara': '&#127466&#127469',
      Eritrea: '&#127466&#127479',
      Spain: '&#127466&#127480',
      Ethiopia: '&#127466&#127481',
      'European Union': '&#127466&#127482',
      Finland: '&#127467&#127470',
      Fiji: '&#127467&#127471',
      'Falkland Islands': '&#127467&#127472',
      Micronesia: '&#127467&#127474',
      'Faroe Islands': '&#127467&#127476',
      France: '&#127467&#127479',
      Gabon: '&#127468&#127462',
      'United Kingdom': '&#127468&#127463',
      Grenada: '&#127468&#127465',
      Georgia: '&#127468&#127466',
      'French Guiana': '&#127468&#127467',
      Guernsey: '&#127468&#127468',
      Ghana: '&#127468&#127469',
      Gibraltar: '&#127468&#127470',
      Greenland: '&#127468&#127473',
      Gambia: '&#127468&#127474',
      Guinea: '&#127468&#127475',
      Guadeloupe: '&#127468&#127477',
      'Equatorial Guinea': '&#127468&#127478',
      Greece: '&#127468&#127479',
      'South Georgia & South Sandwich Islands': '&#127468&#127480',
      Guatemala: '&#127468&#127481',
      Guam: '&#127468&#127482',
      'Guinea-Bissau': '&#127468&#127484',
      Guyana: '&#127468&#127486',
      'Hong Kong SAR China': '&#127469&#127472',
      'Heard & McDonald Islands': '&#127469&#127474',
      Honduras: '&#127469&#127475',
      Croatia: '&#127469&#127479',
      Haiti: '&#127469&#127481',
      Hungary: '&#127469&#127482',
      'Canary Islands': '&#127470&#127464',
      Indonesia: '&#127470&#127465',
      Ireland: '&#127470&#127466',
      Israel: '&#127470&#127473',
      'Isle of Man': '&#127470&#127474',
      India: '&#127470&#127475',
      'British Indian Ocean Territory': '&#127470&#127476',
      Iraq: '&#127470&#127478',
      Iran: '&#127470&#127479',
      Iceland: '&#127470&#127480',
      Italy: '&#127470&#127481',
      Jersey: '&#127471&#127466',
      Jamaica: '&#127471&#127474',
      Jordan: '&#127471&#127476',
      Japan: '&#127471&#127477',
      Kenya: '&#127472&#127466',
      Kyrgyzstan: '&#127472&#127468',
      Cambodia: '&#127472&#127469',
      Kiribati: '&#127472&#127470',
      Comoros: '&#127472&#127474',
      'St. Kitts & Nevis': '&#127472&#127475',
      'North Korea': '&#127472&#127477',
      'South Korea': '&#127472&#127479',
      Kuwait: '&#127472&#127484',
      'Cayman Islands': '&#127472&#127486',
      Kazakhstan: '&#127472&#127487',
      Laos: '&#127473&#127462',
      Lebanon: '&#127473&#127463',
      'St. Lucia': '&#127473&#127464',
      Liechtenstein: '&#127473&#127470',
      'Sri Lanka': '&#127473&#127472',
      Liberia: '&#127473&#127479',
      Lesotho: '&#127473&#127480',
      Lithuania: '&#127473&#127481',
      Luxembourg: '&#127473&#127482',
      Latvia: '&#127473&#127483',
      Libya: '&#127473&#127486',
      Morocco: '&#127474&#127462',
      Monaco: '&#127474&#127464',
      Moldova: '&#127474&#127465',
      Montenegro: '&#127474&#127466',
      'St. Martin': '&#127474&#127467',
      Madagascar: '&#127474&#127468',
      'Marshall Islands': '&#127474&#127469',
      Macedonia: '&#127474&#127472',
      Mali: '&#127474&#127473',
      'Myanmar (Burma': '&#127474&#127474',
      Mongolia: '&#127474&#127475',
      'Macao SAR China': '&#127474&#127476',
      'Northern Mariana Islands': '&#127474&#127477',
      Martinique: '&#127474&#127478',
      Mauritania: '&#127474&#127479',
      Montserrat: '&#127474&#127480',
      Malta: '&#127474&#127481',
      Mauritius: '&#127474&#127482',
      Maldives: '&#127474&#127483',
      Malawi: '&#127474&#127484',
      Mexico: '&#127474&#127485',
      Malaysia: '&#127474&#127486',
      Mozambique: '&#127474&#127487',
      Namibia: '&#127475&#127462',
      'New Caledonia': '&#127475&#127464',
      Niger: '&#127475&#127466',
      'Norfolk Island': '&#127475&#127467',
      Nigeria: '&#127475&#127468',
      Nicaragua: '&#127475&#127470',
      Netherlands: '&#127475&#127473',
      Norway: '&#127475&#127476',
      Nepal: '&#127475&#127477',
      Nauru: '&#127475&#127479',
      Niue: '&#127475&#127482',
      'New Zealand': '&#127475&#127487',
      Oman: '&#127476&#127474',
      Panama: '&#127477&#127462',
      Peru: '&#127477&#127466',
      'French Polynesia': '&#127477&#127467',
      'Papua New Guinea': '&#127477&#127468',
      Philippines: '&#127477&#127469',
      Pakistan: '&#127477&#127472',
      Poland: '&#127477&#127473',
      'St. Pierre & Miquelon': '&#127477&#127474',
      'Pitcairn Islands': '&#127477&#127475',
      'Puerto Rico': '&#127477&#127479',
      'Palestinian Territories': '&#127477&#127480',
      Portugal: '&#127477&#127481',
      Palau: '&#127477&#127484',
      Paraguay: '&#127477&#127486',
      Qatar: '&#127478&#127462',
      Réunion: '&#127479&#127466',
      Romania: '&#127479&#127476',
      Serbia: '&#127479&#127480',
      Russia: '&#127479&#127482',
      Rwanda: '&#127479&#127484',
      'Saudi Arabia': '&#127480&#127462',
      'Solomon Islands': '&#127480&#127463',
      Seychelles: '&#127480&#127464',
      Sudan: '&#127480&#127465',
      Sweden: '&#127480&#127466',
      Singapore: '&#127480&#127468',
      'St. Helena': '&#127480&#127469',
      Slovenia: '&#127480&#127470',
      'Svalbard & Jan Mayen': '&#127480&#127471',
      Slovakia: '&#127480&#127472',
      'Sierra Leone': '&#127480&#127473',
      'San Marino': '&#127480&#127474',
      Senegal: '&#127480&#127475',
      Somalia: '&#127480&#127476',
      Suriname: '&#127480&#127479',
      'South Sudan': '&#127480&#127480',
      'São Tomé & Príncipe': '&#127480&#127481',
      'El Salvador': '&#127480&#127483',
      'Sint Maarten': '&#127480&#127485',
      Syria: '&#127480&#127486',
      Eswatini: '&#127480&#127487',
      'Tristan da Cunha': '&#127481&#127462',
      'Turks & Caicos Islands': '&#127481&#127464',
      Chad: '&#127481&#127465',
      'French Southern Territories': '&#127481&#127467',
      Togo: '&#127481&#127468',
      Thailand: '&#127481&#127469',
      Tajikistan: '&#127481&#127471',
      Tokelau: '&#127481&#127472',
      'Timor-Leste': '&#127481&#127473',
      Turkmenistan: '&#127481&#127474',
      Tunisia: '&#127481&#127475',
      Tonga: '&#127481&#127476',
      Turkey: '&#127481&#127479',
      'Trinidad & Tobago': '&#127481&#127481',
      Tuvalu: '&#127481&#127483',
      Taiwan: '&#127481&#127484',
      Tanzania: '&#127481&#127487',
      Ukraine: '&#127482&#127462',
      Uganda: '&#127482&#127468',
      'U.S. Outlying Islands': '&#127482&#127474',
      'United Nations': '&#127482&#127475',
      'United States': '&#127482&#127480',
      Uruguay: '&#127482&#127486',
      Uzbekistan: '&#127482&#127487',
      'Vatican City': '&#127483&#127462',
      'St. Vincent & Grenadines': '&#127483&#127464',
      Venezuela: '&#127483&#127466',
      'British Virgin Islands': '&#127483&#127468',
      'U.S. Virgin Islands': '&#127483&#127470',
      Vietnam: '&#127483&#127475',
      Vanuatu: '&#127483&#127482',
      'Wallis & Futuna': '&#127484&#127467',
      Samoa: '&#127484&#127480',
      Kosovo: '&#127485&#127472',
      Yemen: '&#127486&#127466',
      Mayotte: '&#127486&#127481',
      'South Africa': '&#127487&#127462',
      Zambia: '&#127487&#127474',
      Zimbabwe: '&#127487&#127484',
      England: '&#127988&#917607&#917602&#917605&#917614&#917607&#917631',
      Scotland: '&#127988&#917607&#917602&#917619&#917603&#917620&#917631',
      Wales: '&#127988&#917607&#917602&#917623&#917612&#917619&#917631',
    };

    return countryFalgs[name] || '';
  };

  printListCoutries();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((item, index) => {
      data[index] = item;
    });
    try {
      const response = await axios.post(`${baseUrl}/signup`, data);

      if (response.data.isLoggedIn) {
        setLogged({
          isLoggedIn: true,
          user: response.data.user,
        });

        setTimeout(() => {
          navigate('/productos');
        }, 2000);
      } else {
        setErrorMessage(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line
  }, [logged, errorMessage]);

  return (
    <>
      {errorMessage ? (
        <div className='error'>
          <div className='container'>
            <h1>Error</h1>
            Please try again
            <Link to='/signup' className='btn btn-warning'>
              Signup
            </Link>
          </div>
        </div>
      ) : (
        <div className='container'>
          <div className='jumbotron'>
            <h1>Signup</h1>
            <br />
            <form
              className='form'
              autoComplete='off'
              onSubmit={handleSubmit}
              enctype='multipart/form-data'
            >
              <div className='form-group mb-3'>
                <input
                  name='username'
                  placeholder='Usuario'
                  className='form-control'
                  type='text'
                  required
                />
              </div>
              <div className='form-group mb-3'>
                <input
                  name='password'
                  placeholder='Password'
                  className='form-control'
                  type='password'
                  required
                />
              </div>

              <br />

              <div className='form-group mb-3'>
                <input
                  name='firstName'
                  placeholder='First Name'
                  className='form-control'
                  type='text'
                  required
                />
              </div>

              <div className='form-group mb-3'>
                <input
                  name='lastName'
                  placeholder='Last Name'
                  className='form-control'
                  type='text'
                  required
                />
              </div>

              <div className='form-group mb-3'>
                <input
                  name='email'
                  placeholder='Email'
                  className='form-control'
                  type='email'
                  required
                />
              </div>

              <div className='form-group mb-3'>
                <div className='row'>
                  <div className='col-3'>
                    <select
                      className='form-select'
                      name='country-code'
                      id='country-code'
                    >
                      <option value=''>+ Codgio país</option>
                    </select>
                  </div>
                  <div className='col-9'>
                    <input
                      name='phone'
                      placeholder='Teléfono'
                      className='form-control'
                      type='text'
                      required
                    />
                  </div>
                </div>
              </div>

              <div className='form-group mb-3'>
                <input
                  name='address'
                  placeholder='Address'
                  className='form-control'
                  type='text'
                  required
                />
              </div>

              <div className='form-group mb-3'>
                <input
                  name='age'
                  placeholder='Edad'
                  className='form-control'
                  type='number'
                  required
                />
              </div>

              <div className='form-group mb-3'>
                <label for='foto' className='form-label'>
                  Avatar
                </label>
                <input
                  className='form-control'
                  type='file'
                  id='foto'
                  name='foto'
                  required
                />
              </div>

              <div className='form-group'>
                <input
                  className='btn btn-success my-3'
                  type='submit'
                  value='Singup'
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
