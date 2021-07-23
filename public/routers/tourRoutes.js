const express = require('express')
const tourRoutes = express.Router(); 

const getAllTours = (request, response) => {
  console.log(request.requestTime);
  response.status(200).json({
    status: 'success',
    requestedAt: request.requestTime,
    results: tours.length,
    data: {
      tours: tours,
    },
  });
};

const getTour = (request, response) => {
  const id = request.params.id * 1;
  const tour = tours.find((el) => el.id == id);

  if (!tour) {
    return response.status(404).json({
      status: 'fail',
      message: 'invalid ID',
    });
  }

  response.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

const createTour = (request, response) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, request.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-sample.json`,
    JSON.stringify(tours),
    (err) => {
      response.status(201).json({ status: 'sucess', data: { tour: newTour } });
    }
  );
};

const updateTour = (request, response) => {
  if (request.params.id * 1 > tours.length) {
    return response.status(404).json({
      status: 'fail',
      message: 'invalid ID',
    });
  }
  response.status(200).json({
    status: 'sucess',
    data: {
      tour: '<Updated tour.....>',
    },
  });
};

const deleteTour = (request, response) => {
  if (request.params.id * 1 > tours.length) {
    return response.status(404).json({
      status: 'fail',
      message: 'invalid id',
    });
  }

  response.send(204).json({
    status: 'sucess',
    data: null,
  });
};

tourRoutes.route('/').get(getAllTours).post(createTour);
tourRoutes.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = tourRoutes;
