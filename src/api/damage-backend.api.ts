const DAMAGE_BACKEND_URL = "https://myfailemtions.npkn.net/b944ff/"

class DamageBackendAPI<DamageInfo = string[]> {
  constructor() {}

  // Getting initial information about damages car points
  public async getDamageInfo(): Promise<DamageInfo> {
    const resp = await fetch(DAMAGE_BACKEND_URL)
    return await resp.json()
  }

  // Sending updated information about damages car points
  public async postDamageInfo(damageInfo: DamageInfo): Promise<DamageInfo> {
    const resp = await fetch(DAMAGE_BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(damageInfo),
    })

    return await resp.json()
  }
}

export default new DamageBackendAPI()
