export const state = () => ({
  provinces: {
    rajaongkir: {
      results: {},
    },
  },
  cities: {
    rajaongkir: {
      results: {},
    },
  },
  cities_local: {
    rajaongkir: {
      result: {},
    },
  },
  couriers: [
    {
      code: 'OGC',
    },
    {
      code: 'jne',
    },
    {
      code: 'tiki',
    },
    {
      code: 'pos',
    },
  ],
  servicesCosts: {},
  fullDetails: {},
})

export const getters = {
  PROVINCES(state) {
    return state.provinces.rajaongkir.results
  },
  CITIES: (state) => (province = '') => {
    if (province !== '') {
      const arr = province.split('|')
      const provinceId = arr[1]
      return state.cities.rajaongkir.results.filter(
        (x) => x.province_id === provinceId
      )
    } else {
      return state.cities.rajaongkir.results
    }
  },
  CITIES_LOCAL(state) {
    return state.cities_local.rajaongkir.results
  },
  COURIERS(state) {
    return state.couriers
  },
  SERVICES_COSTS(state) {
    return state.servicesCosts
  },
}

export const mutations = {
  SET_PROVINCES(state, payload) {
    state.provinces = payload
  },
  SET_CITIES(state, payload) {
    state.cities = payload
  },
  SET_CITIES_LOCAL(state, payload) {
    state.cities_local = payload
  },
  SET_SERVICES_COSTS(state, payload) {
    state.servicesCosts = payload.rajaongkir.results[0].costs
    state.fullDetails = payload.rajaongkir
  },
}

export const actions = {
  async GET_SERVICES_COSTS({ commit }, obj) {
    const form = {
      destination: obj.destination,
      weight: obj.weight,
      courier: obj.courier,
    }
    const data = await this.$axios.$post(`/get-services-costs`, form)
    commit('SET_SERVICES_COSTS', data)
  },
  async GET_CITIES({ commit }, provinceId = '') {
    const data = await this.$axios.$get(`/get-cities?province=${provinceId}`)
    commit('SET_CITIES', data)
    commit('SET_CITIES_LOCAL', data)
  },
  async GET_PROVINCES({ commit }) {
    let data = null
    try {
      data = await this.$axios.$get('get-provinces')
    } catch (e) {
      data = {
        rajaongkir: {
          results: [
            {
              province_id: '1',
              province: 'Bali',
            },
            {
              province_id: '2',
              province: 'Bangka Belitung',
            },
            {
              province_id: '3',
              province: 'Banten',
            },
            {
              province_id: '4',
              province: 'Bengkulu',
            },
            {
              province_id: '5',
              province: 'DI Yogyakarta',
            },
            {
              province_id: '6',
              province: 'DKI Jakarta',
            },
            {
              province_id: '7',
              province: 'Gorontalo',
            },
            {
              province_id: '8',
              province: 'Jambi',
            },
            {
              province_id: '9',
              province: 'Jawa Barat',
            },
            {
              province_id: '10',
              province: 'Jawa Tengah',
            },
            {
              province_id: '11',
              province: 'Jawa Timur',
            },
            {
              province_id: '12',
              province: 'Kalimantan Barat',
            },
            {
              province_id: '13',
              province: 'Kalimantan Selatan',
            },
            {
              province_id: '14',
              province: 'Kalimantan Tengah',
            },
            {
              province_id: '15',
              province: 'Kalimantan Timur',
            },
            {
              province_id: '16',
              province: 'Kalimantan Utara',
            },
            {
              province_id: '17',
              province: 'Kepulauan Riau',
            },
            {
              province_id: '18',
              province: 'Lampung',
            },
            {
              province_id: '19',
              province: 'Maluku',
            },
            {
              province_id: '20',
              province: 'Maluku Utara',
            },
            {
              province_id: '21',
              province: 'Nanggroe Aceh Darussalam (NAD)',
            },
            {
              province_id: '22',
              province: 'Nusa Tenggara Barat (NTB)',
            },
            {
              province_id: '23',
              province: 'Nusa Tenggara Timur (NTT)',
            },
            {
              province_id: '24',
              province: 'Papua',
            },
            {
              province_id: '25',
              province: 'Papua Barat',
            },
            {
              province_id: '26',
              province: 'Riau',
            },
            {
              province_id: '27',
              province: 'Sulawesi Barat',
            },
            {
              province_id: '28',
              province: 'Sulawesi Selatan',
            },
            {
              province_id: '29',
              province: 'Sulawesi Tengah',
            },
            {
              province_id: '30',
              province: 'Sulawesi Tenggara',
            },
            {
              province_id: '31',
              province: 'Sulawesi Utara',
            },
            {
              province_id: '32',
              province: 'Sumatera Barat',
            },
            {
              province_id: '33',
              province: 'Sumatera Selatan',
            },
            {
              province_id: '34',
              province: 'Sumatera Utara',
            },
          ],
        },
      }
    } finally {
      commit('SET_PROVINCES', data)
    }
  },
}
