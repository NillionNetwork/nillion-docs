# NN Components

## Module: Neural Network Module Logic

### Classes

| Class | Description |
|-------|-------------|
| `Module` | Generic neural network module. |
| `Flatten` | Flatten layer implementation. |
| `Linear` | Linear layer implementation. |
| `AvgPool2d` | 2D-Average pooling layer implementation. |
| `DotProductSimilarity` | Dot product similarity module. |
| `ReLU` | ReLU layer implementation. |
| `Conv2d` | Conv2D layer implementation. |
| `Parameter` | Parameter class. |
| `LinearRegression` | Linear regression implementation |
| `LogisticRegression` | Logistic regression implementation |
| `Prophet` | Prophet forecasting implementation |

### Model Clients

| Class | Description | 
|-------|-------------|
| `ProphetClient` | ModelClient for Prophet models |
| `SklearnClient` | ModelClient for Scikit-learn models | 
| `TorchClient` | ModelClient for PyTorch models |
| `ModelClientMeta` | ML model client metaclass |
| `ModelClient` | ML model client |

### Class: Module

| Method | Description |
|--------|-------------|
| `forward(x: na.NadaArray) -> na.NadaArray` | Abstract method for forward pass. |
| `__call__(*args, **kwargs) -> na.NadaArray` | Proxy for forward pass. |
| `__named_parameters(prefix: str) -> Iterator[Tuple[str, Parameter]]` | Recursively generates all parameters in the module. |
| `named_parameters() -> Iterator[Tuple[str, Parameter]]` | Generates all parameters in the module. |
| `__numel() -> Iterator[int]` | Recursively generates number of elements in each parameter. |
| `numel() -> int` | Returns total number of elements in the module. |
| `load_state_from_network(name: str, party: Party, nada_type: NadaInteger) -> None` | Loads the model state from the Nillion network. |

### Class: Flatten

| Method | Description |
|--------|-------------|
| `__init__(start_dim: int = 1, end_dim: int = -1) -> None` | Initializes the flatten layer with start and end dimensions. |
| `forward(x: na.NadaArray) -> na.NadaArray` | Forward pass. Flattens the input tensor. |

### Class: Linear

| Method | Description |
|--------|-------------|
| `__init__(in_features: int, out_features: int, include_bias: bool = True) -> None` | Initializes the linear layer with input features, output features, and an optional bias. |
| `forward(x: na.NadaArray) -> na.NadaArray` | Forward pass. Applies a linear transformation to the input. |

### Class: AvgPool2d

| Method | Description |
|--------|-------------|
| `__init__(kernel_size: ShapeLike2d, stride: Optional[ShapeLike2d] = None, padding: ShapeLike2d = 0) -> None` | Initializes the 2D average pooling layer. |
| `forward(x: na.NadaArray) -> na.NadaArray` | Forward pass. Applies average pooling to the input. |

### Class: DotProductSimilarity

| Method | Description |
|--------|-------------|
| `forward(x_1: na.NadaArray, x_2: na.NadaArray) -> na.NadaArray` | Forward pass. Computes the dot product similarity between two input arrays. |

### Class: ReLU

| Method | Description |
|--------|-------------|
| `forward(x: na.NadaArray) -> na.NadaArray` | Forward pass. Applies the ReLU activation function to the input. |
| `static _rational_relu(value: Union[na.Rational, na.SecretRational]) -> Union[na.Rational, na.SecretRational]` | Element-wise ReLU logic for rational values. |
| `static _relu(value: NadaType) -> Union[PublicInteger, SecretInteger]` | Element-wise ReLU logic for NadaType values. |

### Class: Conv2d

| Method | Description |
|--------|-------------|
| `__init__(in_channels: int, out_channels: int, kernel_size: ShapeLike2d, padding: ShapeLike2d = 0, stride: ShapeLike2d = 1, include_bias: bool = True) -> None` | Initializes the 2D convolutional layer. |
| `forward(x: na.NadaArray) -> na.NadaArray` | Forward pass. Applies 2D convolution to the input. |

### Class: Parameter

| Method | Description |
|--------|-------------|
| `__init__(shape: ShapeLike = 1) -> None` | Initializes the parameter with a given shape. |
| `numel() -> int` | Returns the number of elements in the parameter. |
| `load_state(state: na.NadaArray) -> None` | Loads a provided NadaArray as the new parameter state. |

## Linear Models

| Class Name             | Description                                      | Methods                                                                                                   |
|------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| `LinearRegression`     | Linear regression implementation                 | `__init__(in_features: int, include_bias: bool = True) -> None`<br/>`forward(x: na.NadaArray) -> na.NadaArray` |
| `LogisticRegression`   | Logistic regression implementation               | `__init__(in_features: int, out_features: int, include_bias: bool = True) -> None`<br/>`forward(x: na.NadaArray) -> na.NadaArray` |


<!-- 
## Typing Traits

| Name                  | Description                                                                                      |
|-----------------------|--------------------------------------------------------------------------------------------------|
| `NillionType`         | Union type for Nillion types including `na.Rational`, `na.SecretRational`, `SecretInteger`, etc.  |
| `LinearModel`         | Union type for linear models including `LinearRegression`, `LogisticRegression`, `LogisticRegressionCV` |
| `ShapeLike`           | Union type for shapes including `int` and `Sequence[int]`                                         |
| `ShapeLike2d`         | Union type for 2D shapes including `int` and `Tuple[int, int]`                                    |
| `NadaInteger`         | Union type for integer types including `dsl.SecretInteger`, `dsl.PublicInteger`, etc.             | -->

## Time Series Models

| Class Name           | Description                                                                                           | Methods                                                                                                                                                                                                                       |
|----------------------|-------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Prophet`            | Prophet forecasting implementation                                                                    | `__init__(n_changepoints: int, growth: str = "linear", yearly_seasonality: bool = True, weekly_seasonality: bool = True, daily_seasonality: bool = False, seasonality_mode: str = "additive") -> None`<br/> <br/> `predict(dates: np.ndarray, floor: na.NadaArray, t: na.NadaArray) -> na.NadaArray`<br/>`predict_trend(floor: na.NadaArray, t: na.NadaArray) -> na.NadaArray`<br/> <br/> `predict_seasonal_comps(dates: np.ndarray) -> Tuple[na.NadaArray, na.NadaArray]`<br/>`make_seasonality_features(dates: np.ndarray, seasonalities: Dict[str, Any]) -> Dict[str, na.NadaArray]`<br/> <br/> `ensure_numeric_dates(dates: np.ndarray) -> np.ndarray`<br/> <br/> `__call__(dates: np.ndarray, floor: na.NadaArray, t: na.NadaArray) -> na.NadaArray`<br/> <br/> `forward(dates: np.ndarray, floor: na.NadaArray, t: na.NadaArray) -> na.NadaArray` |

<!-- ### Utility Functions

| Function Name                | Description                                      | Arguments                                                                                                                                                          | Returns                           |
|------------------------------|--------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| `fourier_series`             | Generates Fourier series                         | `dates (np.ndarray)`, `period (int | float)`, `series_order (int)`                                                                                                | `np.ndarray`                      |
| `kernel_output_shape`        | Determines the output shape after a kernel operation | `input_dims (Tuple[int, int])`, `padding (Tuple[int, int])`, `kernel_size (Tuple[int, int])`, `stride (Tuple[int, int])`                                            | `Tuple[int, int]`                 |
| `ensure_tuple`               | Ensures input gets converted to a shape tuple    | `tuple_like (ShapeLike2d)`                                                                                                                                         | `Tuple[int, int]`                 | -->

<!-- ### Custom Exceptions

| Exception Name                 | Description                             |
|--------------------------------|-----------------------------------------|
| `MismatchedShapesException`    | Raised when NadaArray shapes are incompatible | -->

## Model Clients

| Class Name                | Description                                     | Methods                                                                                                                                              |
|---------------------------|-------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ProphetClient`           | ModelClient for Prophet models                  | `__init__(model: prophet.forecaster.Prophet) -> None`                                                                                                 |
| `SklearnClient`           | ModelClient for Scikit-learn models             | `__init__(model: sklearn.base.BaseEstimator) -> None`                                                                                                |
| `TorchClient`             | ModelClient for PyTorch models                  | `__init__(model: nn.Module) -> None`                                                                                                                  |
| `ModelClientMeta`         | ML model client metaclass                       | `__call__(cls, *args, **kwargs) -> object`                                                                                                            |
| `ModelClient`             | ML model client                                 | `export_state_as_secrets(name: str, nada_type: NillionType) -> Dict[str, NillionType]`<br/>`__ensure_numpy(array_like: Any) -> np.ndarray`             |



For more examples, please visit our [Github Repository Examples](https://github.com/NillionNetwork/nada-ai/tree/main/examples).