const mapEvolutionDetails = (evolutionDetails) =>
  evolutionDetails.map((evolutionDetail) => {
    const detailKeys = Object.keys(evolutionDetail).filter((detailKey) => evolutionDetail[detailKey] && detailKey !== 'trigger');
    const requirements = detailKeys.map((key) => ({
      [key]: evolutionDetail[key],
    }));

    return {
      trigger: evolutionDetail.trigger.name,
      requirements,
    };
  });

export default mapEvolutionDetails;
